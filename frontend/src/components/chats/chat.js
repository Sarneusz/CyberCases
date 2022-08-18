import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

//https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot

const theme = {
    background: '#f5f8fb',
    fontFamily: 'monospace',
    headerBgColor: 'rgba(209,128,218,0.58)',
    headerFontColor: '#fff',
    headerFontSize: '35px',
    botBubbleColor: 'rgba(96,83,92,0.77)',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

class Chat extends Component {

    render() {
        return (

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <ThemeProvider theme={theme}>

            <ChatBot
                width='1500px'
                height='800px'
                headerTitle='Marek'
                cache={false}
                // hideSubmitButton={true}
                placeholder='Twoja wiadomość..'
                steps={[
                    {
                        id: '1',
                        message: 'What number I am thinking?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        options: [
                            { value: 1, label: 'Number 1 ', trigger: '4' },
                            { value: 2, label: 'Number 2', trigger: '3' },
                            { value: 3, label: 'Number 3', trigger: '3' },
                        ],
                    },
                    {
                        id: '3',
                        message: 'Wrong answer, try again.',
                        trigger: '4',
                    },
                    {
                        id: '4',
                        component: (
                            <div>
                            <h5 style={{color: 'red'}}>:(</h5>
                            chujowo
                            </div>
                        ),
                        end: true,
                    },
                ]}
            />

                </ThemeProvider>
            </div>
        );
    }
}

export default Chat;