let selectNav1 = document.querySelector('#productos');

selectNav1.addEventListener('change', function() {
    let value = selectNav1.value;
    console.log('value', value);
    let url = value + '.html';
    window.location.href = url;
    console.log('url', url);
});
