export default {
    install(Vue, options = {}) {
        let hasScrollBarY = false
        let lastEvent = undefined
        const { name, isElementClass, isElementTag, transitionDuration, styles = {} } = options
        const app = isElementClass
            ? document.getElementsByClassName(name || "app")[0]
            : isElementTag
            ? document.getElementsByTagName(name || "div")[0]
            : document.getElementById(name || "app")
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
            if ([undefined, null].includes(app)) {
                return
            }

            const tooltip = app.querySelector(".vue-data-tooltip")

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

            if ([undefined, null].includes(app)) {
                return
            }

            const div = document.createElement("div")
            div.className = "vue-data-tooltip"
            div.style.opacity = "0"
            div.style.position = "absolute"
            div.style.backgroundColor = styles.backgroundColor || "#596175"
            div.style.borderRadius = styles.borderRadius || "5px"
            div.style.maxWidth = styles.maxWidth || "259px"
            div.style.zIndex = "9999999"
            div.style.color = styles.color || "#ffffff"
            div.style.padding = styles.padding || "8px 10px"
            div.style.fontWeight = styles.fontWeight || "600"
            div.style.fontSize = styles.fontSize || "13px"
            div.style.fontFamily = styles.fontFamily || "Montserrat,sans-serif"
            div.style.lineHeight = styles.lineHeight || "16px"
            div.style.textAlign = styles.textAlign || "center"
            div.style.transition = `opacity ${`${transitionDuration !== undefined ? transitionDuration : "0.3"}`}s ease-in-out`
            div.style.pointerEvents = "none"
            div.innerHTML = tooltipText

            if (![undefined, null].includes(app)) {
                lastEvent = e
                app.appendChild(div)
                const tooltip = app.querySelector(".vue-data-tooltip")
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

            if ([undefined, null].includes(app)) {
                return
            }

            const tooltip = app.querySelector(".vue-data-tooltip")

            if (tooltip !== null && app !== null) {
                lastEvent = undefined
                app.removeChild(tooltip)
            }

            e.target.removeEventListener("mousemove", tooltipMouseMove)
        }
        const tooltipMouseMove = (e) => {
            const tooltip = document.querySelector(".vue-data-tooltip")
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
