export function normalizeEmail(email) {
  return String(email ?? '').trim().toLowerCase();
}

export function validateCredentials(email, password) {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail || !normalizedEmail.includes('@')) {
    return {
      ok: false,
      error: 'Please enter a valid email address.',
    };
  }

  if (!String(password ?? '').trim()) {
    return {
      ok: false,
      error: 'Please enter a password.',
    };
  }

  return {
    ok: true,
    normalizedEmail,
  };
}
