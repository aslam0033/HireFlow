export default function calculateProfileCompletion(profile) {
    let completion = 0;

    // Basic Information (25%)
    const basicFields = [
        profile.name,
        profile.position,
        profile.location,
        profile.contactEmail,
        profile.phone,
        profile.photo
    ];

    basicFields.forEach(field => {
        if (field && field.trim() !== "") {
            completion += 4;
        }
    });

    // Summary (10%)
    if (profile.summary?.trim()) {
        completion += 10;
    }

    // Skills (5%)
    if (profile.skills.length >0)
        completion += 5;

    // Experience (20%)
    if (profile.experiences.length >0)
        completion += 20;

    // Education (10%)
    if (profile.education.length > 0)
        completion += 10;

    // Projects (10%)
    if (profile.projects.length > 0)
        completion += 10;

    // Certifications (10%)
    if (profile.certifications.length > 0)
        completion += 10;

    // Resume (10%)
    if (profile.resume)
        completion += 10;

    return Math.min(completion, 100);
}