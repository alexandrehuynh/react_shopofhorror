import * as _React from 'react'; 
import { styled } from '@mui/system'; 
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

// internal import
import shopImage from '../../assets/images/rangershorror.jpg'; 
import { NavBar } from '../sharedComponents';

interface Props {
    title: string
}

// code out our styled components
const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url(${shopImage});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 73%', 
    position: 'absolute',
    marginTop: '10px'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})


// This is our firsst functional based component!
export const Home = (props: Props) => {
    const myAuth = localStorage.getItem('auth')
    // return is always HTML & it can have ONLY 1 parent div 
    return (
        <Root>
            <NavBar />
            <Main>
                <MainText>
                    <Typography variant='h2' color='#8B0000' fontSize ='3rem' fontWeight='bold'> {props.title}</Typography>
                    <Button sx={{ marginTop: '10px' }} variant='contained' component={Link} to={ myAuth === 'true' ? '/shop' : '/auth' }>
                        Enter if you dare.....🧟‍♀️<SportsMartialArtsIcon color="secondary" sx={{ fontSize: 21 }} />🧟‍♂️</Button>
                </MainText>
            </Main>
        </Root>

    )
}