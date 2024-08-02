window.addEventListener('message', function(event) {
    if (event.data.action === "showUI") {
        let config = event.data.config;

        document.body.innerHTML = `
        <div class="main-container ${config.showAnimation}">
            <div class="exit-container">
                <button class="exit-button">Exit</button>
                <span>ESC</span>
            </div>
            <h1 class="title">${config.title}</h1>
            <div class="messages-container"></div>
        </div>`;
        
        config.containers.forEach(container => {
            let containerDiv = $(`
                <div class="container" style="height: ${container.height}vh;">
                    <div class="top-part">
                        <h1 class="inner-title" style="color: ${container.innerTitleColor}; text-shadow: 0 0 0.75vh ${container.boxShadowColor};">${container.innerTitle}</h1>
                    </div>
                    <div class="bottom-part"></div>
                </div>
            `);

            container.paragraphs.forEach(paragraph => {
                containerDiv.find('.bottom-part').append(`<p>${paragraph}</p>`);
            });

            if (container.images) {
                container.images.forEach(image => {
                    containerDiv.find('.bottom-part').append(`<img src="${image}" alt="Image" class="content-image">`);
                });
            }

            if (container.videos) {
                container.videos.forEach(video => {
                    containerDiv.find('.bottom-part').append(`<video src="${video}" controls class="content-video"></video>`);
                });
            }

            if (container.iframes) {
                container.iframes.forEach(iframe => {
                    containerDiv.find('.bottom-part').append(`<iframe src="${iframe}" class="content-iframe" frameborder="0" allowfullscreen></iframe>`);
                });
            }

            $('.messages-container').append(containerDiv);
        });

        $('.main-container').show();

        const adjustContentHeight = () => {
            const containers = document.querySelectorAll('.container');
            containers.forEach(container => {
                const contentElements = container.querySelectorAll('.content-image, .content-video, .content-iframe');
                contentElements.forEach(element => {
                    let heightPercentage = 0;
                    if (container.clientHeight >= 30 * window.innerHeight / 100) {
                        heightPercentage = 65;
                    } else if (container.clientHeight >= 20 * window.innerHeight / 100) {
                        heightPercentage = 45;
                    } else if (container.clientHeight >= 40 * window.innerHeight / 100) {
                        heightPercentage = 100;
                    } else if (container.clientHeight < 20 * window.innerHeight / 100) {
                        heightPercentage = 25;
                    }
                    element.style.height = `${heightPercentage}%`;
                });
            });
        };
        adjustContentHeight();
        window.addEventListener('resize', adjustContentHeight);

        function handleExitButtonClick() {
            $('.main-container').removeClass().addClass('main-container ' + config.closeAnimation);
            setTimeout(() => {
                $.post(`https://fx_welcomeUI/close`, JSON.stringify());
                document.body.innerHTML = '';
            }, 500);
        }
        
        $('.exit-button').click(handleExitButtonClick);
        
        $(document).keydown(function(event) {
            if (event.key === 'Escape' || event.key === 'Esc') {
                handleExitButtonClick();
            }
        });
    }
});
