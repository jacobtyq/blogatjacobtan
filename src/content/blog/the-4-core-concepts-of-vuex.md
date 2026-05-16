---
title: The 4 core concepts of Vuex
pubDate: 2022-07-01
description: ''
cover: /images/the-4-core-concepts-of-vuex/-IlCEiczz.jpeg
---

![The 4 core concepts of Vuex](/images/the-4-core-concepts-of-vuex/-IlCEiczz.jpeg)

I recently revisited Vuex as I needed to pass data between components on an application. Vuex is the official state management library and is the only option available at the moment.

As the official Vuex documentation states:

> It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

Within Vuex, there are 4 important concepts to understand - State, Getters, Mutations, Actions.

![The 4 core concepts of Vuex](/images/the-4-core-concepts-of-vuex/pawUSvLSq.png)

## What is State?

In Vuex, the state is the single source of truth that drives the application. It is where the data for the application is globally stored and can be accessed from the child components via `this.$store` .

    // In store/index.js
    const store = createStore({
    	state: {
    		//...
            storeName: "Jacob's keyboard store"
    	}
    })

    // In a component
    const StoreName = {
    	template: `<h1>{{ name }}</h1>`,
    	computed: {
    		name () {
    			return this.$store.state.name
    		}
    	}
    }

This does not necessary mean you have to store all states in Vuex. If your component has a state that is used within itself, it is fine to have it locally.

Treat Vuex as a file cabinet - a centralised storage. Your states are the files in this cabinet.

## What are Getters?

Getters are computed properties for the stores. With Getters, you can pull only the necessary data from the store to be used within a component.

    const store = createStore({
    	state: {
    		switches: [
    			{ id: 1, name: 'Cherry MX Blue', inStock: true },
    			{ id: 2, name: 'Glorious Panda', inStock: false },
    			{ id: 3, name: 'SP-STAR Nana', inStock: true },
    		]
    	},
    getters: {
    	inStock (state) {
    		return state.switches.filter(switch => switch.inStock)
    	},
        products (state) {
        	return state.switches
        }
    }
    })

### Property and Method style access

Getters will be exposed via the `store.getters object`, and you can access values as properties.

    store.getters.inStock // -> [{ id: 1, name: 'Cherry MX Blue', inStock: true }, { id: 3, name: 'SP-STAR Nana', inStock: true }]

You can also pass arguments to getters, which is useful when you want to query an array.

    // Store

    getters: {
    	//...
    	getSwitchByName: (state) => (name) => {
    		return state.switches.find(switch => switch.name === name)
    	}
    	inStock (state) {
    		return state.switches.filter(switch => switch.inStock)
    	}
    	//...
    }

### mapGetter Helper

You can also access the getters via mapGetter. This allows you to 'map' your getters without you having to create a new computed function.

    // Store

    getters: {
    	//...
      getSwitches: (state) => {
    		return state.switches
    	}
    }


    // In a component

    <div>{{ getSwitches }}</div>

    computed() {
    	...mapGetters(["getSwitches"])
    }

    // Is the same as

    computed() {
    	  getSwitches() {
    			return this.$store.getters.getSwitches
    		}
    }

The equivalent role of a getter in the cabinet analogy is to retrieve files.

## What are Mutations?

Mutations allow you to make a change to a single state in a Vuex store. Mutations come with a string type and a handler.

One important rule to remember is that mutation functions must be synchronous. The [vuex documentation does a great job of explaining why this is so](https://next.vuex.vuejs.org/guide/mutations.html#mutations-must-be-synchronous).

    // Store

    const store = createStore({
    	state: {
    		//...
    		storeName: ""
    	},
    mutations: {
    	updateStoreName (state, payload) {
    	  // mutate store name
    		state.storeName = payload
    	}
    }
    })

In the example above, the mutation string is called `updateStoreName` (the type) and mutates the `storeName` (the handler). There is also an additional argument, called the payload, that is being used in the mutation.

To commit the mutation from your component, you use the following:

    store.commit('updateStoreName', 'My Keyboard Store')

    // Object Style Commit
    store.commit({
    	type: 'updateStoreName',
    	payload: 'My Keyboard Store'
    })

### mapMutations helper

Similarly to mapGetters, you can map mutations too.

    import { mapMutations } from 'vuex'

    export default {
    	//...
    	methods: {
    		...mapMutations([
    			'updateStoreName' // map `this.updateStoreName(name)` to `this.$store.commit('updateStoreName', name)`
    	])
    	}
    }

Again with the cabinet analogy, a mutation can be thought as modifying a file and storing it.

## What are Actions?

Actions are functions that commit mutations. They can also commit asynchronous operations.

### Actions v.s. Mutations

<table>
    <thead>
    <tr>
      <th>Actions</td>
      <th>Mutations</td>
    </tr>
    </thead>
<tbody>
    <tr>
        <td>Asynchronous</td>
        <td>Synchronous</td>
    </tr>
    <tr>
        <td>Commits the mutation</td>
        <td>Mutates the state</td>
    </tr>
</tbody>
</table>

### Committing an Action

    // Store

    const store = createStore({
    	state: {
    		//...
    		storeName: ""
    	},
    mutations: {
    	updateStoreName (state, payload) {
    	  // mutate store name
    		state.storeName = payload
    	}
    },
    actions: {
    	updateStoreName (context, payload) {
    		context.commit('updateStoreName', payload)
    	}
    })

### Dispatching an Action

Actions are dispatched within a component with the following code

    this.$store.dispatch("updateStoreName", "Jacob's Cool Keyboard Store")

### mapActions helper

Similarly, there is also a `mapActions` helper you can use:

    import { mapActions } from 'vuex'
    import _ from 'lodash'

    export default {
    	//...
        methods: {
        	...mapActions([
            	'updateStoreName' // maps `this.updateStoreName(name)` to `this.$store.dispatch('updateStoreName', name)`

                //.. or if you want to use debounce
                updateStoreNameAction: _.debounce(function (event) {
                	this.$store.dispatch('updateStoreName', name)
                }, 300)
            ])
        }
    }

Back to the cabinet analogy, actions can be thought of as a set of instructions directing the getter and mutations.

With Vuex, I get the flexibility to pass states between components while avoiding prop drilling or using custom events which can become messy to manage as your application grows.
