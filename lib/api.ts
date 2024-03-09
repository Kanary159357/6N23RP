interface UpdateBodyRequest {
  characterName: (typeof V7CharNames)[number];
  oldRow: Record<string, string>;
  newRow: Record<string, string>;
  columnType: string;
}

interface CreateBodyRequest {
  characterName: (typeof V7CharNames)[number];
  row: Record<string, string>;
  columnType: string;
}
export async function createCharacterRow(props: CreateBodyRequest) {
  fetch("/api/v7/char", {
    method: "POST",
    body: JSON.stringify(props),
  });
}

export async function updateCharacterRow(props: UpdateBodyRequest) {
  fetch("/api/v7/char", {
    method: "PUT",
    body: JSON.stringify(props),
  });
}
