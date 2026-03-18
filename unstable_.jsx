import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";

export function PasswordField() {
  return (
    <PasswordToggleField.Root>
      <PasswordToggleField.Input />
      <PasswordToggleField.Toggle>
        <PasswordToggleField.Icon
          visible={<EyeOpenIcon />}
          hidden={<EyeClosedIcon />}
        />
      </PasswordToggleField.Toggle>
    </PasswordToggleField.Root>
  );
}

import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";

export function Verify() {
  return (
    <OneTimePasswordField.Root>
      <OneTimePasswordField.Input />
      <OneTimePasswordField.Input />
      <OneTimePasswordField.Input />
      <OneTimePasswordField.Input />
      <OneTimePasswordField.Input />
      <OneTimePasswordField.Input />
      <OneTimePasswordField.HiddenInput />
    </OneTimePasswordField.Root>
  );
}
