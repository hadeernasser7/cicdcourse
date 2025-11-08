function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;

// تشغيل الكود مباشرة لو الملف رئيسي (اختياري)
if (require.main === module) {
    console.log(greet("World"));
}
