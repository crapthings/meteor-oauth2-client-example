const Index = () => <div>
  <h3>hello kitty</h3>
  <button onClick={() => Meteor.logout()}>logout</button>
</div>
// route

FlowRouter.route('/', {
  action() {
    Mount(Layout, { Index })
  }
})
