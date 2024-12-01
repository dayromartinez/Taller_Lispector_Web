import { Box } from '@mui/material';

export const WidgetSoundCloud = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
        >
            <iframe
                style={{
                    width: "90%",
                }}
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1970988011&color=%239fd5d1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
        </Box>
    );
};