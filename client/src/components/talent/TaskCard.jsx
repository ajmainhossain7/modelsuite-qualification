import { claimTask } from '../../api/talent';
import { toast } from 'react-hot-toast';

const STATUS_CLASS = {
  Open:      'status-badge-Open',
  Claimed:   'status-badge-Claimed',
  Submitted: 'status-badge-Submitted',
  Approved:  'status-badge-Approved',
  Rejected:  'status-badge-Rejected',
};

const TaskCard = ({ task, showClaimButton = false, onClaimed }) => {

  const handleClaim = async () => {
    try {
      await claimTask(task._id);
      toast.success('Task claimed successfully!');
      if (onClaimed) onClaimed();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to claim task');
    }
  };

  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-border-light hover:-translate-y-0.5 transition-all cursor-default">

      {/* Header: title + status */}
      <div className="flex items-start justify-between gap-2.5">
        <p className="text-[15px] font-semibold text-text-primary leading-snug">{task.title || 'Untitled Task'}</p>
        {task.status && (
          <span className={`shrink-0 inline-block px-2.5 py-[3px] rounded-full text-[11px] font-semibold tracking-[0.3px] ${STATUS_CLASS[task.status] || ''}`}>
            {task.status}
          </span>
        )}
      </div>

      
      {task.description && (
        <p className="text-[13px] text-text-muted leading-relaxed">{task.description}</p>
      )}

      {/* Meta row */}
      <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] text-text-faint">
            {task.dueDate ? `Due: ${task.dueDate}` : 'No due date'}
          </span>
          {(() => {
            if (!task.dueDate || task.status === 'Approved') return null;
            const diffMs = new Date(task.dueDate) - new Date();
            const diffHours = diffMs / (1000 * 60 * 60);
            if (diffMs < 0) {
              return <span className="inline-block px-2 py-[2px] rounded-full text-[10px] font-bold tracking-[0.2px] badge-overdue shrink-0">Overdue</span>;
            }
            if (diffHours <= 24) {
              return <span className="inline-block px-2 py-[2px] rounded-full text-[10px] font-bold tracking-[0.2px] badge-due-soon shrink-0">Due Soon</span>;
            }
            return null;
          })()}
        </div>
        {task.createdBy?.name && (
          <span className="text-[12px] text-text-faint">By {task.createdBy.name}</span>
        )}
      </div>

      {showClaimButton && (
        <button onClick={handleClaim}
          className="w-full py-2.5 rounded-lg border-none text-[13px] font-semibold text-white cursor-pointer btn-gradient font-sans mt-1">
          Claim Task →
        </button>
      )}
    </div>
  );
};

export default TaskCard;
