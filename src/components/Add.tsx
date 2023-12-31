import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant={"h6"} textAlign={"center"} color={"gray"}>
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30, marginTop: 2 }}
              src="https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography fontWeight={500} variant={"h6"}>
              Alicia Scott
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind..."
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            sx={{
              display: "flex",
              width: "calc(100%)",
              justifyContent: "center",
              height: "40px",
            }}
          >
            <Button variant="contained" sx={{ width: "calc(60%)" }}>
              Post
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
