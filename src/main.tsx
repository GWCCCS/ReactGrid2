import React from 'react';
import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <p> <b>Auto vs fixed column width </b>        </p>
      <p>         </p>
      
      <p> Column 1 has <code>size</code> set to <code>"auto"</code> </p> 
      <IonGrid>
        <IonRow>
          <IonCol size="auto">1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <p>Column 1 has <code>size</code> set to <code>"8"</code> rest are default</p>
      <IonGrid>
        <IonRow>
          <IonCol size="8">1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>


      <p>Column 1 has <code>size</code> set to <code>"8"</code> rest are "1""</p>
      <IonGrid>
        <IonRow>
          <IonCol size="8">1</IonCol>
          <IonCol size="1">2</IonCol>
          <IonCol size="1">3</IonCol>
        </IonRow>
      </IonGrid>

      <p>12 Column layout</p>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>10</IonCol>
          <IonCol>11</IonCol>
          <IonCol>12</IonCol>
        </IonRow>
      </IonGrid>

    </>
  );
}
export default Example;
