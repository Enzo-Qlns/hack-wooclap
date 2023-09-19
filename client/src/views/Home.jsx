import React, { Component } from 'react';
import Utils from '../utils/Utils';
import { Box } from '@mui/material';
import SelectBasic from '../components/Select';
import FormAddUser from '../components/FormAddUser';
import FormGetAnswer from '../components/FormGetAnswer';
import { Badge, Chip, Divider, Sheet, Typography } from '@mui/joy';
import Toaster from '../utils/Toaster';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 0,
            isLoadingAddUserSubmitButton: false,
            answers: [],
        };

        this.handleSubmitAddUser = (WOOCLAP_ID, NUMBER_ATTACK) => {
            this.setState({ isLoadingAddUserSubmitButton: true });
            if (!Utils.isEmpty(this.props.getAction)) {
                this.props.getAction(this.state.action, WOOCLAP_ID, NUMBER_ATTACK, "", (res) => {
                    if (!Utils.isEmpty(res.detail)) {
                        this.setState({ isLoadingAddUserSubmitButton: false });
                        Toaster.success(res.message)
                    };
                });
            };
        };

        this.handleSubmitGetAnswer = (WOOCLAP_ID, QUESTION_TITLE) => {
            this.setState({ isLoadingAddUserSubmitButton: true });
            this.props.getAction(this.state.action, WOOCLAP_ID, "", QUESTION_TITLE, (res) => {
                if (!Utils.isEmpty(res.detail)) {
                    this.setState({ isLoadingAddUserSubmitButton: false });
                    this.setState({ answers: res.detail });
                };
            });
        };

    };
    render() {
        return (
            <>
                <Typography
                    level='h2'
                    textAlign={'center'}
                    color="primary"
                >
                    Hack WOOCLAP</Typography>
                <Box
                    sx={{
                        m: 15,
                        mb: 0,
                        border: "solid 5px #0a6bcbba",
                        borderBottom: 0,
                        borderRadius: '1.5rem 1.5rem 0 0',
                        height: 'calc(100vh - 165px)',
                        "& .baseContent": { m: 5 },
                        "& form": { mt: 2 },
                    }}
                >
                    <div className='baseContent'>
                        <SelectBasic onChangeValue={action => this.setState({ action: action, answers: [] })} />
                        {this.state.action === 1 ? <FormAddUser isLoading={this.state.isLoadingAddUserSubmitButton} onSubmitAddUser={this.handleSubmitAddUser} />
                            : this.state.action === 2 ? <FormGetAnswer onSubmitAddUser={this.handleSubmitGetAnswer} isLoading={this.state.isLoadingAddUserSubmitButton} /> : ""}
                    </div>
                    {this.state.action === 2 && (
                        <>
                            {!Utils.isEmpty(this.state.answers) && (
                                <Divider>
                                    <Chip variant="soft" size="lg">
                                        Réponse(s)
                                    </Chip>
                                </Divider>)}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mt: 5,
                                }}
                            >
                                {this.state.answers.map((answer, index) => (
                                    <Badge key={index} badgeContent={(index + 1).toString()}>
                                        <Sheet color="primary" variant="outlined" sx={{ p: 4, ml: 2 }}>
                                            {answer}
                                        </Sheet>
                                    </Badge>
                                ))}
                            </Box>
                        </>)}

                </Box>
            </ >
        );
    };
};
export default Home;