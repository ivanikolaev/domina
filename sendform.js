document.querySelector('.contact-form__submit').addEventListener('click', function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const chat_id = '793756038'; 
    const token = '8179820867:AAH62HXRTYn2mgMfQ0m-JXcn6UjOsglVmjs'; // токен вашего бота
    const text = `Имя: ${name}\nТелефон: ${phone}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Заявка успешно отправлена!');
        } else {
            alert('Ошибка при отправке. Попробуйте снова.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке. Попробуйте снова.');
    });
});