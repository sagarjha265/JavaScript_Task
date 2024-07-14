function protect_email(email) {
    const [user, domain] = email.split('@');
    return `${user.substring(0, 5)}...@${domain}`;
}

// Test Data
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
