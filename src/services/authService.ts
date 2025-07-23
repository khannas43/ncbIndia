export const AUTH_BASE_URL = import.meta.env.VITE_AUTH_BASE_URL || ''
export const CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID || ''
export const REDIRECT_URI = import.meta.env.VITE_AUTH_REDIRECT_URI || window.location.origin
export const SCOPE = import.meta.env.VITE_AUTH_SCOPE || ''

const CODE_VERIFIER_KEY = 'pkce_code_verifier'

function base64UrlEncode(buffer: ArrayBuffer | Uint8Array) {
  const bytes = new Uint8Array(buffer)
  let str = ''
  for (let i = 0; i < bytes.byteLength; i++) {
    str += String.fromCharCode(bytes[i])
  }
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function generateCodeVerifier(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return base64UrlEncode(array)
}

export async function generateCodeChallenge(verifier: string): Promise<string> {
  const data = new TextEncoder().encode(verifier)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return base64UrlEncode(digest)
}

export async function login() {
  if (!AUTH_BASE_URL || !CLIENT_ID) {
    console.error('Missing OAuth configuration. Please set VITE_AUTH_BASE_URL and VITE_AUTH_CLIENT_ID')
    return
  }

  const verifier = generateCodeVerifier()
  sessionStorage.setItem(CODE_VERIFIER_KEY, verifier)
  const challenge = await generateCodeChallenge(verifier)

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    code_challenge: challenge,
    code_challenge_method: 'S256',
    scope: SCOPE,
  })

  window.location.assign(`${AUTH_BASE_URL}/authorize?${params.toString()}`)
}
  if (!AUTH_BASE_URL || !CLIENT_ID) {
    console.error('Missing OAuth configuration. Please set VITE_AUTH_BASE_URL and VITE_AUTH_CLIENT_ID')
    return
  }

  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')
  const verifier = sessionStorage.getItem(CODE_VERIFIER_KEY)
  if (!code || !verifier) {
    return
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: CLIENT_ID,
    code,
    redirect_uri: REDIRECT_URI,
    code_verifier: verifier,
  })

  await fetch(`${AUTH_BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
    credentials: 'include',
  })

  sessionStorage.removeItem(CODE_VERIFIER_KEY)
  window.history.replaceState(null, '', window.location.pathname)
}

export async function refreshToken() {
  if (!AUTH_BASE_URL || !CLIENT_ID) {
    console.error('Missing OAuth configuration. Please set VITE_AUTH_BASE_URL and VITE_AUTH_CLIENT_ID')
    return
  }
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: CLIENT_ID,
  })
  await fetch(`${AUTH_BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
    credentials: 'include',
  })
}

export async function logout() {

  if (!AUTH_BASE_URL) {
    console.error('Missing OAuth configuration. Please set VITE_AUTH_BASE_URL')
    return
  }
  await fetch(`${AUTH_BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
  })
}
