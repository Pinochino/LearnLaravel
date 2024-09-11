import { Box } from "@mui/material";
import BarChart from "~/components/BarChart";
import Header from "~/components/Header";

function BarPage() {
    return (<Box>
        <Header title='LINE PAGE' subtitle='Create new line' />
        <Box>
            <BarChart height='75vh' />
        </Box>
    </Box>  );
}

export default BarPage;