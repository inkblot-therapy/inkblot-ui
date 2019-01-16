import styledComponents from '../../../utils/styled-components';

const StyledModal = styledComponents<{}, 'div'>('div')`
  padding: 4em 2em;
  margin-left: auto;
  margin-right: auto;
  min-width: 100px;
  max-width: 80vw;
  min-height: 50px;
  max-height: 60vh;
  overflow-y: auto;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(99, 150, 177, 0.2);
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export default StyledModal;
