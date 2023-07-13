'use client'

import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useRouter } from "next/navigation";

export type CustomModalProps = {
  isOpen: boolean;
  header?: string;
  children: React.ReactNode;
};

export default function CustomModal({
  isOpen,
 
  header,
  children,
}: CustomModalProps) {

    const router=useRouter();
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={isOpen}
      onClose={()=>router.back()}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 800,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose
          variant="outlined"
          sx={{
            top: "calc(-1/4 * var(--IconButton-size))",
            right: "calc(-1/4 * var(--IconButton-size))",
            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
            borderRadius: "50%",
            bgcolor: "background.body",
          }}
        />
        { header &&
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {header}
        </Typography>
}
        {children}
      </Sheet>
    </Modal>
  );
}
