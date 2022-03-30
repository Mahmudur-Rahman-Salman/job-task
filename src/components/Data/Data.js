import { Card, CardContent, Grid, Typography } from '@mui/material';

import React, { useState } from 'react';

const Data = () => {

    const [user, setUser] = useState([]);

    const getFetchData = async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

        const data = await res.json();
        setUser(data);

        console.log(data)

    };

    getFetchData();

    return (
        <div>

            <Grid lg={12} container spacing={2}>

                {
                    user.map(data => {
                        return (
                            <Grid key={data.id} item lg={3} xs={12} sm={6}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            {data.name}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {data.username}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {data.email}
                                        </Typography>

                                    </CardContent>

                                </Card>









                            </Grid>
                        )
                    })
                }

            </Grid>
        </div>
    );
};

export default Data;