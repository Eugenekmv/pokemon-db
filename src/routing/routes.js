import Home from '../components/Home'
import Pokemon from '../components/Pokemon/Pokemon'

const routes = [{
        path: "/pokemon-db/:page",
        component: Home,
        exact: true
    },
    {
        path: "/pokemon-db/pokemon/:pokemon",
        component: Pokemon,
        exact: true
    }
]


export default routes