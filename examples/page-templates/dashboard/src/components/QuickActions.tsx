import React from 'react';
import { Card, Button } from '@designbasekorea/ui';
import {
  PlusIcon,
  UploadIcon,
  ShareAltIcon,
  SettingsIcon,
  DownloadIcon,
  TrashIcon,
} from '@designbasekorea/icons';
import './QuickActions.scss';

const QuickActions: React.FC = () => {
  const actions = [
    {
      id: 'create',
      label: '새 프로젝트',
      icon: <PlusIcon />,
      variant: 'primary' as const,
    },
    {
      id: 'upload',
      label: '파일 업로드',
      icon: <UploadIcon />,
      variant: 'outline' as const,
    },
    {
      id: 'share',
      label: '공유하기',
      icon: <ShareAltIcon />,
      variant: 'outline' as const,
    },
    {
      id: 'export',
      label: '내보내기',
      icon: <DownloadIcon />,
      variant: 'outline' as const,
    },
    {
      id: 'settings',
      label: '설정',
      icon: <SettingsIcon />,
      variant: 'outline' as const,
    },
    {
      id: 'delete',
      label: '삭제',
      icon: <TrashIcon />,
      variant: 'outline' as const,
      danger: true,
    },
  ];

  return (
    <Card className="quick-actions">
      <h3 className="quick-actions-title">빠른 작업</h3>
      <div className="quick-actions-list">
        {actions.map((action) => (
          <Button
            key={action.id}
            variant={action.variant}
            size="medium"
            fullWidth
            onClick={() => console.log('Action:', action.id)}
            className={action.danger ? 'danger-action' : ''}
          >
            {action.icon}
            {action.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;

