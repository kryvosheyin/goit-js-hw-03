const slugify = (title) => {
    // Removing potential spaces at the beginning and at the end
    const trimmedTitle = title.trim();

    // Remvoing special characters except for space and hyphen
    const noSpecialChars = trimmedTitle.replace(/[^a-zA-Z0-9 -]/g, "");

    // Converting multiple spaces to single space
    const normalizedSpaces = noSpecialChars.replace(/\s+/g, " ");

    // Slugifying the title
    return normalizedSpaces.toLowerCase().split(" ").join("-");
};

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
