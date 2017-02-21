const tracker = (props, onData) => {
  const userId = Meteor.userId()
  const user = Meteor.user() || {}
  const isUserLoaded = user._id ? true : false
  onData(null, { userId, user, isUserLoaded })
}

const index = ({ Index, userId, user, isUserLoaded }) => isUserLoaded ? <div>
  <Index />
</div> : <Login />

Layout = Container(tracker)(index)
