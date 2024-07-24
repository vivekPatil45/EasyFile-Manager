chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
    const audioExtensions = ['mp3', 'wav', 'flac', 'aac', 'ogg'];
    const videoExtensions = ['mp4', 'avi', 'mkv', 'mov', 'wmv'];
    const docExtensions = ['pdf', 'docx', 'txt', 'pptx', 'xlsx'];
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
    const codeExtensions = ['js', 'html', 'css', 'py', 'java', 'c', 'cpp', 'rb', 'php', 'ts', 'json', 'xml'];

    const fileExtension = downloadItem.filename.split('.').pop().toLowerCase();

    let newPath = '';

    if (audioExtensions.includes(fileExtension)) {
      newPath = 'Audios/' + downloadItem.filename;
    } else if (videoExtensions.includes(fileExtension)) {
      newPath = 'Videos/' + downloadItem.filename;
    } else if (docExtensions.includes(fileExtension)) {
      newPath = 'Documents/' + downloadItem.filename;
    } else if (imageExtensions.includes(fileExtension)) {
      newPath = 'Images/' + downloadItem.filename;
    } else if (codeExtensions.includes(fileExtension)) {
      newPath = 'Codes/' + downloadItem.filename;
    }

    if (newPath) {
      suggest({ filename: newPath });
    } else {
      suggest();
    }
});
