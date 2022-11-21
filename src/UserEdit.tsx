import * as React from 'react';
import { Edit, FormTab, SimpleForm, TabbedForm, TextInput } from 'react-admin';

export const UserEdit = () => {
  return (
      <Edit>
          <SimpleForm redirect={false}>
              <TextInput source="nickname" />
          </SimpleForm>
      </Edit>
  );
};
