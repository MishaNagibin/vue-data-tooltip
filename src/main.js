export default {
    install(Vue, options) {
        Vue.mixin({
            data() {
                return {
                    hasScrollBarY: false,
                    lastEvent: undefined,
                    elementID: options || "app",
                }
            },
            mounted() {
                document.addEventListener("mouseover", this.tooltipMouseOver)
                document.addEventListener("mouseout", this.tooltipMouseOut)
                document.addEventListener("scroll", this.scroll)
            },
            methods: {
                scroll() {
                    if (this.lastEvent !== undefined) {
                        this.closeTooltip(this.lastEvent)
                    }
                },
                closeTooltip(e) {
                    const app = document.getElementById(this.elementID)

                    if (app === null) {
                        return
                    }

                    const tooltip = app.querySelector(".tooltip")

                    if (tooltip !== null) {
                        this.lastEvent = undefined
                        e.target.removeEventListener("mousemove", this.tooltipMouseMove)
                        app.removeChild(tooltip)
                    }
                },
                tooltipMouseOver(e) {
                    const target = e.target

                    if (target.nodeName === "HTML") {
                        return
                    }

                    const tooltipText = target.dataset.tooltip ? target.dataset.tooltip : target.parentElement.dataset.tooltip

                    if (tooltipText === undefined) {
                        return
                    }

                    const app = document.getElementById(this.elementID)

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
                        this.lastEvent = e
                        app.appendChild(div)
                        const tooltip = app.querySelector(".tooltip")
                        setTimeout(() => {
                            tooltip.style.opacity = "1"
                        }, 200)
                    }

                    this.hasScrollBarY = document.documentElement.offsetHeight !== document.documentElement.scrollHeight
                    e.target.addEventListener("mousemove", this.tooltipMouseMove)
                    this.tooltipMouseMove(e)
                    e.target.addEventListener("mouseup", () => this.closeTooltip(e))
                },
                tooltipMouseOut(e) {
                    if (this.lastEvent === undefined) {
                        return
                    }

                    const app = document.getElementById(this.elementID)

                    if (app === null) {
                        return
                    }

                    const tooltip = app.querySelector(".tooltip")

                    if (tooltip !== null && app !== null) {
                        this.lastEvent = undefined
                        app.removeChild(tooltip)
                    }

                    e.target.removeEventListener("mousemove", this.tooltipMouseMove)
                },
                tooltipMouseMove(e) {
                    const tooltip = document.querySelector(".tooltip")
                    tooltip.style.top =
                        e.y + tooltip.clientHeight + 30 > e.view.innerHeight
                            ? `${e.pageY - tooltip.clientHeight - 25}px`
                            : `${e.pageY + 25}px`
                    const mouseX = e.x - tooltip.clientWidth / 2 + 5
                    tooltip.style.left = `${
                        mouseX < 0
                            ? 10
                            : mouseX + tooltip.clientWidth + (this.hasScrollBarY ? 17 : 0) > e.view.innerWidth
                            ? e.view.innerWidth - tooltip.clientWidth - (this.hasScrollBarY ? 20 : 10)
                            : mouseX
                    }px`
                },
            },
        })
    },
}
