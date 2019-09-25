import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export default styled(ToastContainer)`
  /*
  Classes:
  Toastify__toast – main
  Toastify__toast-body – content wrapper
  Toastify__progress-bar – progress bar
  
  Modificators:
  --default
  --success
  --warning
  --error
  */

  && {
    color: inherit;
  }

  .Toastify__toast {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;

    &--default {
    }

    &--success {
    }

    &--warning {
    }

    &--error {
    }
  }

  .Toastify__toast-body {
    text-align: center;

    &--default {
    }

    &--success {
    }

    &--warning {
    }

    &--error {
    }
  }

  .Toastify__progress-bar {
    &--default {
    }

    &--success {
    }

    &--warning {
    }

    &--error {
    }
  }
`;
