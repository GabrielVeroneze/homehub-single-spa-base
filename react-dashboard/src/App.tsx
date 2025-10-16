import { Box, Grid } from '@mui/material'
import HeroCard from './components/HeroCard'
import UsersCard from './components/UsersCard'
import WaterCard from './components/WaterCard'

const App = () => {
    return (
        <Box
            width={2 / 3}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ margin: 'auto' }}
        >
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid size={12}>
                    <HeroCard />
                </Grid>
                <Grid size={4}>
                    <UsersCard />
                </Grid>
                <Grid size={4}>
                    <WaterCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default App
