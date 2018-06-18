# DynamicReactiveForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Description

POC of DynamicReactiveForms that allows, fast and agile, creation of views. You don't need to create the model or validators, this solutions does for you.

## How it works

You only need to define de component in the view and the library will create the validators, the model, etc.

## Example

View code:
```html
<app-my-input 
  [title]="'Name'" 
  [placeholder]="'Enter your name'" 
  [name]="'name'"
  [minLength]="2"
  [maxLength]="15"
  [required]="true">
</app-my-input>
<app-my-input 
  [title]="'Surname'" 
  [placeholder]="'Enter your surname'" 
  [name]="'surname'"
  [maxLength]="15"
  [readOnly]="!!!attachedFormGroup.get('name').value">
</app-my-input>
```
With this definition the Name input will have validators to be required and between 2 and 15 characters.
The Surname input will remain disabled until name is not void and will be limited to 15 characters.

Generated Model:
```json
{
  'name':'valueName',
  'surname':'valueSurname',
}
```

