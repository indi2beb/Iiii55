document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        Swal.fire({
            title: 'Join Telegram Channel ',
            text: 'Join our Telegram channel for predictions.',
            imageUrl: 'https://telegram.org/file/400780400716/1/XJO2Q5w4Zpc.409362/7121a558655ea5a8b8', // 
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Telegram',
            confirmButtonText: 'Join Now',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            cancelButtonText: 'Later'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://t.me/+W8oriAyIMZxhNDU1'; 
            }
        });
    }, 2000);
});
