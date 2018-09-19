import Vue from 'vue'
import Router from 'vue-router'

//import Hello from '@/components/Hello'

//import Example1 from 'components/example1/Example1'
//import Example2 from 'components/example2/Example2'
//import Example3 from 'components/example3/Example3'
//import Example4 from 'components/example4/Example4'

const Example1 = (resolve) => {
  import('components/example1/Example1').then((module) => {
    resolve(module)
  })
}

const Example2 = (resolve) => {
  import('components/example2/Example2').then((module) => {
    resolve(module)
  })
}
const Example3 = (resolve) => {
  import('components/example3/Example3').then((module) => {
    resolve(module)
  })
}
const Example4 = (resolve) => {
  import('components/example4/Example4').then((module) => {
    resolve(module)
  })
}
const Example5 = (resolve) => {
  import('components/example5/Example5').then((module) => {
    resolve(module)
  })
}
const Example6 = (resolve) => {
  import('components/example6/Example6').then((module) => {
    resolve(module)
  })
}
const Example7 = (resolve) => {
  import('components/example7/Example7').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

let routes = new Router({
  routes: [
    {
      path: '/',
      redirect: '/example1'
    },
    {
      path: '/example1',
      name: 'example1',
      component: Example1,
      meta: {requiresAuth: true}
    },
    {
      path: '/example2',
      name: 'example2',
      component: Example2
    },
    {
      path: '/example3',
      name: 'example3',
      component: Example3
    },
    {
      path: '/example4',
      name: 'example4',
      component: Example4
    },
    {
      path: '/example5',
      name: 'example5',
      component: Example5
    },
    {
      path: '/example6',
      name: 'example6',
      component: Example6
    },
    {
      path: '/example7',
      name: 'example7',
      component: Example7
    }
  ]
})

// let routeData = [
//   {
//     path: '/example4',
//     name: 'example4',
//     component: resolve => require(['components/example4/Example4'], resolve)
//   }
// ]
//
// routes.addRoutes(routeData)

export default routes
