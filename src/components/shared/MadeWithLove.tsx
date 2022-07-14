import {Anchor} from "@mantine/core";
import * as React from "react";

const MadeWithLove = () => {
    const repo = 'https://github.com/Siravian-index/pokemon-challenge'
    return <Anchor color='dimmed' href={repo} target='_blank' mr='sm' size='xs' >David</Anchor>
}

export default MadeWithLove