export default {
    install(Vue, options) {
        let hasScrollBarY = false
        let lastEvent = undefined
        const elementID = options || "app"
        const init = () => {
            document.addEventListener("mouseover", mouseOver)
            document.addEventListener("mouseout", mouseOut)
            document.addEventListener("scroll", scroll)
        }
        const scroll = () => {
            if (lastEvent !== undefined) {
                closeTooltip(lastEvent)
            }
        }
        const closeTooltip = (e) => {
            const app = document.getElementById(elementID)

            if (app === null) {
                return
            }

            const tooltip = app.querySelector(".tooltip")

            if (tooltip !== null) {
                lastEvent = undefined
                e.target.removeEventListener("mousemove", tooltipMouseMove)
                app.removeChild(tooltip)
            }
        }
        const mouseOver = (e) => {
            const target = e.target

            if (target.nodeName === "HTML") {
                return
            }

            const tooltipText = target.dataset.tooltip ? target.dataset.tooltip : target.parentElement.dataset.tooltip

            if (tooltipText === undefined) {
                return
            }

            const app = document.getElementById(elementID)

            if (app === null) {
                return
            }

            const div = document.createElement("div")
            div.className = "tooltip"
            div.style.opacity = "0"
            div.style.position = "absolute"
            div.style.backgroundColor = "#596175"
            div.style.borderRadius = "5px"
            div.style.maxWidth = "259px"
            div.style.zIndex = "9999999"
            div.style.color = "#ffffff"
            div.style.padding = "8px 10px"
            div.style.fontWeight = "600"
            div.style.fontSize = "13px"
            div.style.lineHeight = "16px"
            div.style.textAlign = "center"
            div.style.transition = "opacity 0.3s ease-in-out"
            div.style.pointerEvents = "none"
            div.innerHTML = tooltipText

            if (app !== null) {
                lastEvent = e
                app.appendChild(div)
                const tooltip = app.querySelector(".tooltip")
                setTimeout(() => {
                    tooltip.style.opacity = "1"
                }, 200)
            }

            hasScrollBarY = document.documentElement.offsetHeight !== document.documentElement.scrollHeight
            e.target.addEventListener("mousemove", tooltipMouseMove)
            tooltipMouseMove(e)
            e.target.addEventListener("mouseup", () => closeTooltip(e))
        }
        const mouseOut = (e) => {
            if (lastEvent === undefined) {
                return
            }

            const app = document.getElementById(elementID)

            if (app === null) {
                return
            }

            const tooltip = app.querySelector(".tooltip")

            if (tooltip !== null && app !== null) {
                lastEvent = undefined
                app.removeChild(tooltip)
            }

            e.target.removeEventListener("mousemove", tooltipMouseMove)
        }
        const tooltipMouseMove = (e) => {
            const tooltip = document.querySelector(".tooltip")
            tooltip.style.top =
                e.y + tooltip.clientHeight + 30 > e.view.innerHeight ? `${e.pageY - tooltip.clientHeight - 25}px` : `${e.pageY + 25}px`
            const mouseX = e.x - tooltip.clientWidth / 2 + 5
            tooltip.style.left = `${
                mouseX < 0
                    ? 10
                    : mouseX + tooltip.clientWidth + (hasScrollBarY ? 17 : 0) > e.view.innerWidth
                    ? e.view.innerWidth - tooltip.clientWidth - (hasScrollBarY ? 20 : 10)
                    : mouseX
            }px`
        }
        init()
    },
}
