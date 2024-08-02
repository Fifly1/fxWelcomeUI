Config = {
    title = "WELCOME",
    showAnimation = "fadeInSlideUp",  -- options: none, fadeIn, fadeInSlideUp, slideUp
    closeAnimation = "fadeOutSlideDown",  -- options: none, fadeOut, fadeOutSlideDown, slideDown
    containers = {
        {
            height = 20,
            innerTitle = "Changelog",
            innerTitleColor = "#FFFFFF",
            boxShadowColor = "rgba(255, 255, 255, 0.4)",
            paragraphs = {
                "Lorem ipsum odor amet, consectetuer adipiscing elit...",
                "Ultricies mus donec tellus, varius phasellus aptent tortor penatibus..."
            },
            images = {
                --"url_to_image1.jpg",
                --"url_to_image2.png"
            },
            videos = {
                --"url_to_video1.mp4",
                --"url_to_video2.webm"
            },
            iframes = {
                --"https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
        },
        {
            height = 20,
            innerTitle = "Upcoming",
            innerTitleColor = "#FF0000",
            boxShadowColor = "rgba(255, 0, 0, 0.4)",
            paragraphs = {
                "New features coming soon!",
                "Stay tuned for more updates."
            }
        }
    }
}