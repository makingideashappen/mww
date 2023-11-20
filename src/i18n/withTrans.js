/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
import React, { Component } from "react";
import { I18nextProvider, withTranslation } from "react-i18next";
import i18next from "./config";

export function withTrans(WrappedComponent) {
  WrappedComponent = withTranslation()(WrappedComponent);

  return class extends Component {
    render() {
      return (
        <I18nextProvider i18n={i18next}>
          <WrappedComponent {...this.props} language={i18next.language} />
        </I18nextProvider>
      );
    }
  };
}
