import React, {FC} from "react";


type H1Props = { userName: string };

const AppH1: FC<H1Props> = (props) => (
    <h1>Hello, {props.userName}!</h1>
);

export default () => <AppH1 userName="Smarty" />