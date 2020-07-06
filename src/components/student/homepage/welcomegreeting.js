import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Divider, Grid, Loader, Button} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

const WelcomeGreeting=()=>{
        return(
                <div>
                <Header  textAlign="center" as="h1" >How are you doing today?</Header>
                <Grid>
                        <Grid.Column width={5}>

                        </Grid.Column>
                        <Grid.Column width={9}>
                        <Button.Group style={{textAlign:"center"}} vertical  size='massive'>
                <Button style={{textAlign:"center"}} fluid color="brown">Not Too Good</Button>
                <Button style={{textAlign:"center"}} fluid color="orange">Just Fine</Button>
                <Button style={{textAlign:"center"}}  fluid color="green">Pretty Great</Button>
                </Button.Group>
                        </Grid.Column>
                        <Grid.Column width={1}>

                        </Grid.Column>
                </Grid>
               
                </div>
        );
}
export default WelcomeGreeting;