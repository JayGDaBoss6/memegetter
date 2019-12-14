(function app() {
    // Get initial meme and set data
    fetch('https://www.reddit.com/r/dankmemes/top/.json?count=5')
        .then((data) => data.json())
        .then(data => {
            console.log(data)
            document.getElementById('thememe').setAttribute('src', data.data.children[0].data.url);
            document.getElementById('title').innerText = data.data.children[0].data.title;
            document.getElementById('ups').innerText = data.data.children[0].data.ups;

        })
    // Event Listener for get new meme button
    document.getElementById('button').addEventListener('click', () => {

        (document.querySelectorAll('input').forEach(item => {

            if (item.checked) {

                fetch(`https://www.reddit.com/r/${item.value}/top/.json?count=5`)
                    .then((data) => data.json())
                    .then(data => {
                        document.getElementById('thememe').setAttribute('src', data.data.children[0].data.url);
                        document.getElementById('title').innerText = data.data.children[0].data.title;
                        document.getElementById('ups').innerText = data.data.children[0].data.ups;
                    })
            }
        }))
    })
})()