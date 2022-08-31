import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botAvatar from '../avatars/bot.jpg';
import userAvatar from '../avatars/wieslaw.png';
import {theme} from '../../utils';
import {steps} from '../steps/wieslaw';

class Wieslaw extends Component {

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <ThemeProvider theme={theme}>
                    <ChatBot
                        width='1500px'
                        height='800px'
                        headerTitle='Wiesław'
                        cache={false}
                        placeholder='Twoja wiadomość..'
                        steps={steps}
                        botAvatar={userAvatar}
                        userAvatar = {botAvatar}
                        userDelay={100}
                    />
                </ThemeProvider>
            </div>
        );
    }
}

export default Wieslaw;