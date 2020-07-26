import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PreviewPanel, { PreviewPanelProps } from './PreviewPanel.component';
import * as selectors from '../store/generator/generator.selectors';
import * as actions from '../store/generator/generator.actions';

const mapStateToProps = (state: any): Partial<PreviewPanelProps> => {
	const exportType = selectors.getExportType(state);
	const settings = selectors.getExportTypeSettings(state);
	const exportTypeSettings = (settings[exportType]) ? settings[exportType] : {};

	return {
		i18n: selectors.getCoreI18n(state),
		exportSettingsVisible: selectors.shouldShowExportSettings(state),
		numPreviewRows: selectors.getNumPreviewRows(state),
		builderLayout: selectors.getBuilderLayout(state),
		previewTextSize: selectors.getPreviewTextSize(state),
		showRowNumbers: selectors.shouldShowRowNumbers(state),
		enableLineWrapping: selectors.shouldEnableLineWrapping(state),
		theme: selectors.getTheme(state),
		exportTypeLoaded: selectors.selectedExportTypeLoaded(state),
		exportTypeLabel: selectors.getExportTypeLabel(state),
		exportTypeSettings,
		codeMirrorMode: selectors.getCodeMirrorMode(state),
		hasData: selectors.hasData(state),
		previewString: selectors.getPreviewString(state)
	};
};

const mapDispatchToProps = (dispatch: Dispatch): Partial<PreviewPanelProps> => ({
	togglePreview: (): any => dispatch(actions.togglePreview()),
	refreshPreview: (): any => dispatch(actions.refreshPreview()),
	toggleExportSettings: (): any => dispatch(actions.toggleExportSettings('previewPanel')),
	changeSmallScreenVisiblePanel: (): any => dispatch(actions.changeSmallScreenVisiblePanel())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps

// @ts-ignore
)(PreviewPanel);
