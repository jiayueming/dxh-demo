

export default {
  render: function (createElement) {
    return createElement('a', {
      attrs: {
        name: 'headingId',
        href: '#',
        id: 'foo'
      }
    }, '123')
  },
  mounted() {}
}
