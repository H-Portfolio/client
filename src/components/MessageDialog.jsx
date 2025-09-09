import React from 'react';
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';
import { Button } from './ui/button';

const MessageDialog = ({ 
  isOpen, 
  onClose, 
  type = 'info', 
  title, 
  message, 
  showButtons = true,
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case 'error':
        return <AlertCircle className="w-6 h-6 text-red-400" />;
      default:
        return <Info className="w-6 h-6 text-blue-400" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'success':
        return 'from-green-900/30 to-emerald-900/30 border-green-500/20';
      case 'warning':
        return 'from-yellow-900/30 to-orange-900/30 border-yellow-500/20';
      case 'error':
        return 'from-red-900/30 to-pink-900/30 border-red-500/20';
      default:
        return 'from-blue-900/30 to-cyan-900/30 border-blue-500/20';
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onClose();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md border border-purple-500/20 bg-gray-900/95 backdrop-blur-md text-white">
        <DialogHeader className="relative">
          {/* <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button> */}
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className={`bg-gradient-to-r ${getGradient()} rounded-2xl p-6 border backdrop-blur-sm`}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {getIcon()}
              </div>
              <div className="flex-1 space-y-2">
                {title && (
                  <h3 className="text-lg font-semibold text-white">
                    {title}
                  </h3>
                )}
                <p className="text-gray-300 leading-relaxed">
                  {message}
                </p>
              </div>
            </div>
          </div>

          {showButtons && (
            <div className="flex gap-3 justify-end">
              {onCancel && (
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  {cancelText}
                </Button>
              )}
              <Button
                onClick={handleConfirm}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
              >
                {confirmText}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageDialog;