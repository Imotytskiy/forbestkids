"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  return (
    <Modal
      title="Створити бутік"
      description="Додати новий бутік для товарів та категорій"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
