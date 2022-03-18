import { useLocalization } from '/@/hooks/abp/useLocalization';
import { FormProps, FormSchema } from '/@/components/Form';

const { L } = useLocalization('AbpSaas');

export function getSearchFormSchemas(): Partial<FormProps> {
  return {
    labelWidth: 120,
    schemas: [
      {
        field: 'filter',
        component: 'Input',
        label: L('Search'),
        colProps: { span: 24 },
      },
    ],
  };
}

export function getModalFormSchemas(): FormSchema[] {
  return [
    {
      field: 'id',
      component: 'Input',
      label: 'id',
      show: false,
    },
    {
      field: 'isActive',
      component: 'Checkbox',
      label: L('DisplayName:IsActive'),
      labelWidth: 50,
      colProps: { span: 24 },
      defaultValue: true,
    },
    {
      field: 'name',
      component: 'Input',
      label: L('DisplayName:TenantName'),
      colProps: { span: 24 },
      required: true,
    },
    {
      field: 'enableTime',
      component: 'DatePicker',
      label: L('DisplayName:EnableTime'),
      colProps: { span: 24 },
      defaultValue: new Date(),
      componentProps: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'disableTime',
      component: 'DatePicker',
      label: L('DisplayName:DisableTime'),
      colProps: { span: 24 },
      componentProps: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'adminEmailAddress',
      component: 'Input',
      label: L('DisplayName:AdminEmailAddress'),
      colProps: { span: 24 },
      required: true,
      ifShow: ({ values }) => {
        return values.id ? false : true;
      },
    },
    {
      field: 'adminPassword',
      component: 'InputPassword',
      label: L('DisplayName:AdminPassword'),
      colProps: { span: 24 },
      required: true,
      ifShow: ({ values }) => {
        return values.id ? false : true;
      },
    },
    {
      field: 'useSharedDatabase',
      component: 'Checkbox',
      label: '',
      colProps: { span: 24 },
      defaultValue: true,
      ifShow: ({ values }) => {
        return values.id ? false : true;
      },
      renderComponentContent: L('DisplayName:UseSharedDatabase'),
    },
    {
      field: 'defaultConnectionString',
      component: 'InputTextArea',
      label: L('DisplayName:DefaultConnectionString'),
      colProps: { span: 24 },
      required: true,
      ifShow: ({ values }) => {
        return !values.useSharedDatabase;
      },
      componentProps: {
        rows: 4,
      },
    },
  ];
}

export function getConnectionFormSchemas(): FormSchema[] {
  return [
    {
      field: 'name',
      component: 'Input',
      label: L('DisplayName:Name'),
      colProps: { span: 24 },
      required: true,
    },
    {
      field: 'value',
      component: 'Input',
      label: L('DisplayName:Value'),
      colProps: { span: 24 },
      required: true,
    },
  ];
}
