export default {
  functional: true,
  props: {
    name: String,
    url: String,
    renderFunc: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.name, ctx.props.url)
  }
}
