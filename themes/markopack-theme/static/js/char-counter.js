// Character counter for textarea
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('mce-MMERGE3');
    const charCount = document.getElementById('char-count');

    if (textarea && charCount) {
        textarea.addEventListener('input', function() {
            const currentLength = textarea.value.length;
            charCount.textContent = currentLength;
        });
    }
});
