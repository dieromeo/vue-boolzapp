'use strict';

let DateTime = luxon.DateTime;
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentIndex: 0,
            userText: '',
            searchText: '',
            hour: `${DateTime.local().hour}:${DateTime.local().minute}`,
            myInfo: {
                name: 'Diego',
                lastName: 'Romeo',
                avatar: './img/avatar_2.jpg'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '10/01/2020', currentHour: '15:30', second: ':55' },
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:50', second: ':00' },
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '16:15', second: ':22' },
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '20/03/2020', currentHour: '16:30', second: ':00' },
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: { day: '20/03/2020', currentHour: '16:30', second: ':55' },
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: { day: '20/03/2020', currentHour: '16:35', second: ':00' },
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '28/03/2020', currentHour: '10:10', second: ':40' },
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: { day: '28/03/2020', currentHour: '10:20', second: ':10' },
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: { day: '28/03/2020', currentHour: '16:15', second: ':22' },
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '10/01/2020', currentHour: '15:30', second: ':55' },
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:50', second: ':00' },
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '10/01/2020', currentHour: '15:30', second: ':55' },
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:50', second: ':00' },
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '10/01/2020', currentHour: '15:30', second: ':55' },
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:50', second: ':00' },
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:51', second: ':00' },
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '10/01/2020', currentHour: '15:30', second: ':55' },
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:50', second: ':00' },
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: { day: '10/01/2020', currentHour: '15:30', second: ':55' },
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:50', second: ':00' },
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: { day: '10/01/2020', currentHour: '15:51', second: ':00' },
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]


        };
    },
    methods: {
        getIndex(index) {
            this.currentIndex = index;
        },
        setActive(index) {
            if (this.currentIndex === index) {
                this.contacts[index].visible = false;
                return 'active'
            }
            else {
                this.contacts[index].visible = true;
                return ''
            }
        },
        sendMessage() {
            if (this.userText.trim() !== '') {
                this.contacts[this.currentIndex].messages.push({ date: { day: '', currentHour: this.hour, second: '' }, message: this.userText, status: 'sent' });
                this.userText = '';
                setTimeout(() => { this.contacts[this.currentIndex].messages.push({ date: { day: '', currentHour: this.hour, second: '' }, message: 'Ok!', status: 'received' }) }, 1000);
            }
        },
        searchedChat() {
            if (this.searchText.trim() !== '') {
                return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.searchText.toLowerCase()));
            } else {
                return this.contacts;
            }

        },
    }
}).mount('#app');


